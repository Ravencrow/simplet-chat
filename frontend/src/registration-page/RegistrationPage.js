import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
  card: {
    maxWidth: 400,
    margin: 'auto'
  },
  actions: {
    justifyContent: 'center'
  }
})

export default function RegistrationPage({onRegisterUser}) {
  const classes = styles()
  const [user, setUser] = useState(null)

  return (
    <div className="registration-form">
      <Card className={classes.card}>
        <CardContent>
          <TextField
            required
            id="standard-required"
            label="Enter your username"
            defaultValue=""
            margin="normal"
            placeholder="Your username"
            onChange={event => setUser(event.target.value)}
          />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button onClick={() => onRegisterUser(user)} size="small">Let's chat!</Button>
        </CardActions>
      </Card>
    </div>
  )
}
