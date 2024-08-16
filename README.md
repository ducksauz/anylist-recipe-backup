# anylist-recipe-backup

I've been on a bit of a bender to clean up my backup regime and make
sure I have control over all my data. Anylist is a great tool and I
have no problem paying them ten bucks a year to use it, but I wanted
a backup for our recipes, because we have hundreds in there.

I found the Anylist node module and then I found 
[brianespinoza/anylist-data-fetch](https://github.com/brianespinoza/anylist-data-fetch).
It lacked instuctions, but it was pretty clear what was going on there,
so I used that for a starting point. I don't want to insert into a
Postgres db right now, so I just pared back his code to just dump a
json backup file.

## Usage

Make a `.env` file like `.env.sample` with your Anylist creds in it.

```
npm install
node main.js > recipes.json
```

That's it.

## TODO

* Make the output valid json. It needs an object wrapping all the individual recipe objects