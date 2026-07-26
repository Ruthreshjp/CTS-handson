package com.example.countryservice.controller;

import com.example.countryservice.entity.Country;
import com.example.countryservice.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    // Find country by code
    @GetMapping("/{code}")
    public Country findCountryByCode(@PathVariable String code) {
        return countryService.findCountryByCode(code);
    }

    // Add country
    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        countryService.addCountry(country);
        return countryService.findCountryByCode(country.getCode());
    }

    // Update country
    @PutMapping
    public Country updateCountry(@RequestBody Country country) {
        return countryService.updateCountry(country);
    }

    // Delete country
    @DeleteMapping("/{code}")
    public String deleteCountry(@PathVariable String code) {
        countryService.deleteCountry(code);
        return "Country deleted successfully";
    }

    // Partial name search
    @GetMapping("/search")
    public List<Country> searchCountries(@RequestParam String name) {
        return countryService.searchCountries(name);
    }
}
