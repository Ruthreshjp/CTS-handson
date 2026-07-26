package com.example.countryservice.service;

import com.example.countryservice.entity.Country;
import com.example.countryservice.repository.CountryRepository;
import org.springframework.stereotype.Service;
import com.example.countryservice.service.exception.CountryNotFoundException;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;
import java.util.List;

@Service
public class CountryService {

    private final CountryRepository countryRepository;

    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    // Find a country based on country code
    @Transactional
    public Country findCountryByCode(String countryCode) throws CountryNotFoundException {
        Optional<Country> result = countryRepository.findById(countryCode);
        if (!result.isPresent()) {
            throw new CountryNotFoundException(
                "Country not found with code: " + countryCode
            );
        }
        Country country = result.get();
        return country;
    }

    // Add new country
    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
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
        return countryRepository.findByNameContainingIgnoreCase(name);
    }

}
