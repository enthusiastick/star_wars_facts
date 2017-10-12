# Star Wars Facts

Star Wars Facts is an example monolithic app using `Ruby on Rails` and `React.js` (via the `webpacker` gem.) To get it up and running locally:


```bash
$ git clone git@github.com:enthusiastick/star_wars_facts.git
$ bundle install
$ rake db:create
$ rake db:migrate
$ rake db:seed
$ rails server
```

And then, in a separate terminal tab (note: you will need `yarn` so `brew install yarn` if you have not already done so):

```bash
$ yarn start
```
