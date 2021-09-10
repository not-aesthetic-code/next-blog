export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !name.message() === ""
    ) {
      res.status(422).json({ message: "Invalid input " });
      return;
    }

    // store it in db

    const newMessage = { email, name, message };

    console.log("mesg", newMessage);

    res
      .status(201)
      .json({ message: "Sucessfully stored message!", newMessage });
  }
}
