from kafka import KafkaConsumer

# Configuración del consumidor
bootstrap_servers = 'localhost:9092'
topic_name = 'mi-topico'

# Crear un consumidor de Kafka
consumer = KafkaConsumer(topic_name, bootstrap_servers=bootstrap_servers)

# Consumir mensajes
for message in consumer:
    print(f"Mensaje recibido: {message.value.decode('utf-8')}")
