import mongoose from 'mongoose';  

export const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        // Opciones de conexión (opcional)
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conexión a MongoDB exitosa');
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
    }

  };