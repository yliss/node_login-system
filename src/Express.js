const app = express();
const port = 3000;

dotenv.config({ path: './.env'})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});