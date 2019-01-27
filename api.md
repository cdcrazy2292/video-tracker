### API Resources

  - [GET /api/videos](#get-videos)
  - [POST /api/video/](#post-magazinesidarticles)
  - [PUT /api/video/:id](#post-magazinesidarticles)

### GET api/videos

Gets all the videos that are currently stored in the DB

Example: localhost:9000/api/videos

**Optional Parameters:**

    {
        startDate: [datetime],
        endDate: [dattime]
    } 
    

**Response body Sample:**

    {
       "data": [
           {
               "ID": 4,
               "video_name": "NYC Restaurant Week",
               "brand": "The Thrillist",
               "published": "2017-03-21T07:45:05.000Z",
               "video_count": 0
           },
           {
               "ID": 6,
               "video_name": "LeBron Giving back to the Community",
               "brand": "Now This",
               "published": "2018-04-14T13:33:55.000Z",
               "video_count": 0
           },
           {
               "ID": 7,
               "video_name": "Congress Fails Again",
               "brand": "Now This",
               "published": "2017-05-01T06:29:12.000Z",
               "video_count": 0
           },
           {
               "ID": 8,
               "video_name": "Japanese Tacos",
               "brand": "The Thrillist",
               "published": "2018-06-01T16:12:12.000Z",
               "video_count": 0
           }
       ]
    }

### POST /api/video
Create/Add a new video 

Example: localhost:9000/api/video/

**Required Body**

    {
        "video_name": [string],
        "brand" : [string],
        "published: [datetime]
    }
    
    

Response body:

    {
         "affectedRows": 1,
          "insertId": 11
    }



### PUT /api/video/:id

Updates view_count

Example: Update – PUT  localhost:9000/api/video/9

Request body:

    
        {
            "message": "Success. (Rows matched: 0  Changed: 0  Warnings: 0"
        }
    
    
    
