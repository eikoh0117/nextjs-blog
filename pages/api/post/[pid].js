export default (req, res) => {
  const {
    query: { pid },
  } = req
  console.log("req", req)
  res.end(`Post: ${pid}`)
}
