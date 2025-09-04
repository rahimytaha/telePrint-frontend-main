/** @format */

const sandbox = true // Set to true for testing, false for production

const configOriginal = {
  publish_key: "pk_live_51Hk7j0HUz35n7YaqFBxRTbIf8XWZDpEcM82e8AoifmFQvFRYFInuhyxiQD9jN1i95RpXm6VRU79lIuPqD9uTTU5P00g0OjI7Kf"
}
const configTest = {
  publish_key: "pk_test_51OvNHOAy51nVJGgODNnpvW2yA699pf3eDsQHp3AWD9Sb0QaMyNYc3hmW37kjgOgltVqnyzaEbhZGKfRPzmxra3yK00nxQzSoov"
}
const config = sandbox ? configTest : configOriginal
export default config
