import React, { useState } from "react";

const CountrySearch = () => {
    const [countryName, setCountryName] = useState("");
    const [countryData, setCountryData] = useState(null);

    const fetchCountryData = async (countryName) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            const [country] = await response.json();

            const {
                altSpellings,
                area,
                borders,
                capital,
                capitalInfo,
                car,
                cca2,
                cca3,
                ccn3,
                cioc,
                coatOfArms,
                continents,
                currencies,
                demonyms,
                fifa,
                flag,
                flags,
                gini,
                idd,
                independent,
                landlocked,
                languages,
                latlng,
                maps,
                name,
                population,
                postalCode,
                region,
                startOfWeek,
                status,
                subregion,
                timezones,
                tld,
                translations,
                unMember,
                // Add more fields as needed
            } = country;

            return {
                altSpellings,
                area,
                borders,
                capital,
                capitalInfo,
                car,
                cca2,
                cca3,
                ccn3,
                cioc,
                coatOfArms,
                continents,
                currencies,
                demonyms,
                fifa,
                flag,
                flags,
                gini,
                idd,
                independent,
                landlocked,
                languages,
                latlng,
                maps,
                name,
                population,
                postalCode,
                region,
                startOfWeek,
                status,
                subregion,
                timezones,
                tld,
                translations,
                unMember,
                // Add more fields as needed
            };
        } catch (error) {
            console.error("Error fetching country data:", error);
            return null;
        }
    };

    const handleSearch = async () => {
        const data = await fetchCountryData(countryName);
        setCountryData(data);
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", maxHeight: "100%", margin: "auto", textAlign: "center", backgroundColor: "#f2f2f2" }}>
            <h1>Country Information Search</h1>
            <input
                type="text"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                style={{ padding: "8px", marginRight: "8px" }}
            />
            <button onClick={handleSearch} style={{ padding: "8px", cursor: "pointer" }}>
                Search
            </button>

            {countryData && (
                <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
                    <h2>{countryData.name.common}</h2>
                    <strong>Flag:</strong>
                    <img src={countryData.flags.png} alt={`${countryName} flag`} style={{ maxWidth: "100%", marginBottom: "10px" }} />

                    {/* Display other information */}
                    <p>
                        <strong>Alt Spellings:</strong> {countryData.altSpellings.join(", ")}
                    </p>
                    <p>
                        <strong>Area:</strong> {countryData.area} sq. km
                    </p>
                    <p>
                        <strong>Borders:</strong> {countryData.borders.join(", ")}
                    </p>
                    <p>
                        <strong>Capital:</strong> {countryData.capital[0]}
                    </p>
                    <p>
                        <strong>Capital Info:</strong> {JSON.stringify(countryData.capitalInfo)}
                    </p>
                    <p>
                        <strong>Car:</strong> {JSON.stringify(countryData.car)}
                    </p>
                    <p>
                        <strong>CCA2:</strong> {countryData.cca2}
                    </p>
                    <p>
                        <strong>CCA3:</strong> {countryData.cca3}
                    </p>
                    <p>
                        <strong>CCN3:</strong> {countryData.ccn3}
                    </p>
                    <p>
                        <strong>CIOC:</strong> {countryData.cioc}
                    </p>
                    <p>
                        <strong>Coat of Arms:</strong> <img src={countryData.coatOfArms.png} alt="Coat of Arms" style={{ maxWidth: "100%", marginBottom: "10px" }} />
                    </p>
                    <p>
                        <strong>Continents:</strong> {countryData.continents.join(", ")}
                    </p>
                    <p>
                        <strong>Currencies:</strong>{" "}
                        {Object.values(countryData.currencies).map((currency) => currency.name).join(", ")}
                    </p>
                    <p>
                        <strong>Demonyms:</strong> {JSON.stringify(countryData.demonyms)}
                    </p>
                    <p>
                        <strong>FIFA:</strong> {countryData.fifa}
                    </p>
                    <p>
                        <strong>Gini:</strong> {JSON.stringify(countryData.gini)}
                    </p>
                    <p>
                        <strong>IDD:</strong> {JSON.stringify(countryData.idd)}
                    </p>
                    <p>
                        <strong>Independent:</strong> {countryData.independent.toString()}
                    </p>
                    <p>
                        <strong>Landlocked:</strong> {countryData.landlocked.toString()}
                    </p>
                    <p>
                        <strong>Languages:</strong> {Object.values(countryData.languages).join(", ")}
                    </p>
                    <p>
                        <strong>Latlng:</strong> {countryData.latlng.join(", ")}
                    </p>
                    <p>
                        <strong>Maps:</strong>
                        <a href={countryData.maps.googleMaps}>https://goo.gl/maps/5LYujdfR5yLUXoERA</a>
                    </p>
                    <p>
                        <strong>Population:</strong> {countryData.population}
                    </p>
                    <p>
                        <strong>Postal Code:</strong> {JSON.stringify(countryData.postalCode)}
                    </p>
                    <p>
                        <strong>Region:</strong> {countryData.region}
                    </p>
                    <p>
                        <strong>Start of Week:</strong> {countryData.startOfWeek}
                    </p>
                    <p>
                        <strong>Status:</strong> {countryData.status}
                    </p>
                    <p>
                        <strong>Subregion:</strong> {countryData.subregion}
                    </p>
                    <p>
                        <strong>Timezones:</strong> {countryData.timezones.join(", ")}
                    </p>
                    <p>
                        <strong>TLD:</strong> {countryData.tld.join(", ")}
                    </p>
                    <p>
                        <strong>Translations:</strong> {JSON.stringify(countryData.translations)}
                    </p>
                    <p>
                        <strong>UN Member:</strong> {countryData.unMember.toString()}
                    </p>
                    {/* Add more fields as needed */}
                </div>
            )}
        </div>
    );
};

export default CountrySearch;
