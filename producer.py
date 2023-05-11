from kafka import KafkaProducer

# Configuración del productor
bootstrap_servers = 'localhost:9092'
topic_name = 'mi-topico'

# Crear un productor de Kafka
producer = KafkaProducer(bootstrap_servers=bootstrap_servers)

# Enviar mensajes
message = "¡Hola, mundo!"
producer.send(topic_name, message.encode('utf-8'))
producer.flush()

print("Mensaje enviado")