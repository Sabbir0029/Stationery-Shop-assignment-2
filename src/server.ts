import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

try {
  mongoose.connect(config.database_url as string);

  app.listen(config.path, () => {
    console.log(`Example app listening on port ${config.path}`);
  });
} catch (error) {
  console.log(error);
}
