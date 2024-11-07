WITH UserRatings AS (
    SELECT 
        u.name,
        COUNT(mr.movie_id) AS rating_count
    FROM 
        Users u
    JOIN 
        MovieRating mr ON u.user_id = mr.user_id
    GROUP BY 
        u.user_id, u.name
),
TopUser AS (
    SELECT 
        name
    FROM 
        UserRatings
    ORDER BY 
        rating_count DESC, name ASC
    LIMIT 1
),
MovieAverages AS (
    SELECT 
        m.title,
        AVG(mr.rating) AS avg_rating
    FROM 
        Movies m
    JOIN 
        MovieRating mr ON m.movie_id = mr.movie_id
    WHERE 
        mr.created_at >= '2020-02-01' AND mr.created_at < '2020-03-01'
    GROUP BY 
        m.movie_id, m.title
),
TopMovie AS (
    SELECT 
        title
    FROM 
        MovieAverages
    ORDER BY 
        avg_rating DESC, title ASC
    LIMIT 1
)
SELECT name AS results
FROM TopUser
UNION ALL
SELECT title AS results
FROM TopMovie;
