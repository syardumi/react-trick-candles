import axios from 'axios'

const url = 'https://9vsql7oa2m.execute-api.us-east-1.amazonaws.com/dev/particle/publishEvent'

const onLightSwitch = async(status, location, id) => {
  await axios.post(url, {
      action: 'switchLightsState',
      params: `${status},${location},${id}`,
      secretId: 'prod/lightboard/particle'
    }
  ).catch((e) => {
    console.log(e)
  })
}

export { onLightSwitch }
