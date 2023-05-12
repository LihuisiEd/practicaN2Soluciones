#!/bin/bash

while true
do
  message=$(date +%s)
  echo "Enviando mensaje: $message"
  echo $message | kafka-console-producer.sh --broker-list kafka:9092 --topic mi-topico
  sleep 1
done
