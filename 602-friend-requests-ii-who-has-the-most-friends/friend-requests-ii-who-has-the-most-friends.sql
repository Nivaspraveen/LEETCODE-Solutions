WITH FriendCounts AS (
    SELECT requester_id AS id FROM RequestAccepted
    UNION ALL
    SELECT accepter_id AS id FROM RequestAccepted
),
FriendUniqueCounts AS (
    SELECT id, COUNT(*) AS num FROM 
        FriendCounts GROUP BY id
)

SELECT id, num FROM FriendUniqueCounts WHERE num = (SELECT MAX(num) FROM FriendUniqueCounts);
