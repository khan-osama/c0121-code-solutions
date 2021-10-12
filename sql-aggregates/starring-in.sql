select "c"."name",
        count("fc"."categoryId") as "categoryCount"
from "categories" as "c"
join "filmCategory" as "fc" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."actorId" = '178'
group by "c"."categoryId";
