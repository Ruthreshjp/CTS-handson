package com.example.countryservice.service;

import com.example.countryservice.entity.Country;
import com.example.countryservice.repository.CountryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private final CountryRepository countryRepository;

    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    // Find a country based on country code
    public Country findCountryByCode(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    // Add new country
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    // Update country
    public Country updateCountry(Country country) {
        return countryRepository.save(country);
    }

    // Delete country
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }

    // Find countries matching partial country name
    public List<Country> searchCountries(String name) {
        return countryRepository.findByCoNameContainingIgnoreCase(name);
    }
}
