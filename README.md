<img src="https://www.monkeyuser.com/assets/images/logo.svg" width="150">

# MonkeyUser API

> A CORS enabled API for the [MonkeyUser](https://www.monkeyuser.com/) comics.

# Usage

```markdown
# api overview
https://monkeyuser-api.ridvanaltun.vercel.app/api

# all comics
https://monkeyuser-api.ridvanaltun.vercel.app/api/comics

# latest comic strip
https://monkeyuser-api.ridvanaltun.vercel.app/api/comics/latest

# random comic strip
https://monkeyuser-api.ridvanaltun.vercel.app/api/comics/random

# 100th comic strip
https://monkeyuser-api.ridvanaltun.vercel.app/api/comics/100
```

# Example Response (comic strip #223)

```json
{
  "id": 223,
  "title": "Teamwork",
  "description": "If we all are moving forward together, then success is guaranteed.",
  "published_at": "Fri, 16 Oct 2020 03:00:00 +0300",
  "link": "https://www.monkeyuser.com/2020/teamwork/",
  "image_url": "https://www.monkeyuser.com/assets/images/2020/192-teamwork.png"
}
```

# Show Image Directly

Just add `?img=true` end of url, like:

```markdown
# latest comic strip image
https://monkeyuser-api.ridvanaltun.vercel.app/api/comics/latest?img=true

# random comic strip image
https://monkeyuser-api.ridvanaltun.vercel.app/api/comics/random?img=true

# 100th comic strip image
https://monkeyuser-api.ridvanaltun.vercel.app/api/comics/100?img=true
```

## Example: Latest Comic Strip

![Latest Comic Strip](https://monkeyuser-api.ridvanaltun.vercel.app/api/comics/latest?img=true)

***How works?***

```markdown
![Latest Comic Strip](https://monkeyuser-api.ridvanaltun.vercel.app/api/comics/latest?img=true)
```
