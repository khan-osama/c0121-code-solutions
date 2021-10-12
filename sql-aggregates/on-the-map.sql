select "countries"."name",
        count("cities"."name") as "numOfCities"
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId";
