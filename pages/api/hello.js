export default function handler(req, res) {
  console.log(res.status(200))
  res.status(200).json({ text: 'Hello' })
}
