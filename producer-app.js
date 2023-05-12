const { Kafka } = require('kafkajs');

// Configuración de Kafka
const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['kafka:9092'],
});

// Crea un productor
const producer = kafka.producer();

// Función asincrónica para enviar mensajes
const sendMessage = async () => {
  try {
    // Conecta el productor a Kafka
    await producer.connect();

    // Envia mensajes en un bucle infinito
    while (true) {
      const message = new Date().toISOString();
      console.log(`Enviando mensaje: ${message}`);

      // Envia el mensaje al tópico "mi-topico"
      await producer.send({
        topic: 'mi-topico',
        messages: [
          {
            value: message,
          },
        ],
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error('Error al enviar mensajes:', error);
  } finally {
    // Desconecta el productor de Kafka
    await producer.disconnect();
  }
};

// Ejecuta la función para enviar mensajes
sendMessage().catch(console.error);
