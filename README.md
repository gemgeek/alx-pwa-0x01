# 🎬 CineSeek - MoviesDatabase API Documentation Summary

## 🧭 API Overview
The **MoviesDatabase API** provides comprehensive and updated data for a vast collection of entertainment titles.  
It covers:
- Over **9 million movies, series, and episodes**
- More than **11 million actors and crew members**

The API includes details such as trailers, awards, biographies, ratings, and more — making it a powerful resource for building movie and TV show discovery applications.

---

## 🧩 Version
The provided documentation does **not specify** an API version number.

---

## 🔗 Available Endpoints

### 🎞️ Titles
- `/titles` — Returns a list of titles based on various filter and sorting parameters.  
- `/titles/{id}` — Returns detailed information for a single title using its ID.  
- `/titles/{id}/ratings` — Returns the rating and vote count for a specific title.  
- `/titles/x/upcoming` — Returns a list of upcoming titles.  

### 🔍 Search
- `/titles/search/keyword/{keyword}` — Searches for titles by a keyword.  
- `/titles/search/title/{title}` — Searches for titles by a full or partial title name.  

### 👩‍🎤 Actors
- `/actors` — Returns a list of actors.  
- `/actors/{id}` — Returns detailed information for a single actor using their ID.  

### 🧰 Utilities
- `/title/utils/genres` — Returns a list of all available genres.  
- `/title/utils/lists` — Returns a list of predefined collections (e.g., “most popular movies”).

---

## 📦 Request and Response Format
Requests are made via **`GET`** calls with optional query parameters to filter results.  
Every response returns a JSON object containing a `results` key.

**Example Request (Get the first 10 Action movies from 2024):**
```
GET /titles?limit=10&page=1&year=2024&genre=Action
```

**Example Response Body (Simplified):**
```json
{
  "page": 1,
  "next": "/titles?page=2&year=2024&genre=Action",
  "entries": 10,
  "results": [
    {
      "id": "tt123456",
      "titleText": {
        "text": "Sample Action Movie"
      },
      "releaseYear": {
        "year": 2024
      },
      "primaryImage": {
        "url": "https://m.media-amazon.com/images/M/example.jpg"
      }
    }
  ]
}
```

---

## 🔐 Authentication
The documentation does not specify an authentication method.  
However, APIs on **RapidAPI** typically use an **API key** sent in the request headers.

**Header Name:** `X-RapidAPI-Key`  
**Header Value:** *Your personal API key provided by RapidAPI.*

---

## ⚠️ Error Handling
The documentation does not list specific error codes.  
Standard HTTP status codes typically apply:

| Code | Meaning | Description |
|------|----------|-------------|
| 401 | Unauthorized | API key missing or invalid |
| 403 | Forbidden | Not subscribed or usage quota exceeded |
| 404 | Not Found | Resource or endpoint does not exist |
| 500 | Internal Server Error | Problem occurred on the API’s server |

---

## 📊 Usage Limits and Best Practices
The documentation does not specify usage limits.  
You should check the **Pricing** tab on the API’s RapidAPI page for rate limits (e.g., requests per day/month).

**Best Practices:**
- Use **pagination** (`page` and `limit` parameters) to fetch data in chunks.  
- Avoid making unnecessary repeated requests.  
- Cache frequently requested data when possible.

---