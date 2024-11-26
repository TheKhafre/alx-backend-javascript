/**
 * Contains the miscellaneous route handlers.
 * @author Oluwatobiloba Ezekiel <https://github.com/thekhafre>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
