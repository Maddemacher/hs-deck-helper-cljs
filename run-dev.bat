call lein descjop-externs-dev
call lein descjop-once-dev
start "" lein descjop-test
start "" lein descjop-figwheel
call electron app/dev/