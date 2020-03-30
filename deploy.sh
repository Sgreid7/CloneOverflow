docker build -t CloneOverflow-image .

docker tag CloneOverflow-image registry.heroku.com/CloneOverflow/web


docker push registry.heroku.com/CloneOverflow/web

heroku container:release web -a CloneOverflow