import store from '@/store'
// import auth from '@/auth/helpers'

export default class Service {
  constructor (options) {
    this.id = store.state.auth.user.id
  }

  getProfile () {
    // Mock data.
    // Replace this with actual call to backend server below.
    const parsed = {
      email: 'nostprumprajee@gmail.com',
      name: 'Wirawat B.',
      country: 'Thailand',
      addressLine1: '1234 Some St.',
      addressLine2: '',
      state: 'Bangkok',
      zipcode: '10900'
    }

    // Simulate loading time.
    return new Promise((resolve) => {
      setTimeout(() => { resolve(parsed) }, 500)
    })

    /*
    return auth.get('/account')
      .then((response) => {
        const parsed = {
          email: response.email,
          name: response.name,
          country: response.country,
          addressLine1: response.address_line1,
          addressLine2: response.address_line2,
          state: response.state,
          zipcode: response.zipcode
        }

        return new Promise((resolve) => { resolve(parsed) })
      })
      .catch((error) => {
        return new Promise((resolve, reject) => { reject(error) })
      })
    */
  }
}
