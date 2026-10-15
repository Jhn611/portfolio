import axios from 'axios'

const URL = "https://mail-sender-eta-steel.vercel.app/api/form"

const headers = {
  'Content-Type': 'application/json',
}

const mailAPI = {
  sendMail: (name, email, text) => {
    return axios.post( URL, { name, email, text, }, { headers, },)
  }
}

export default mailAPI
