import React, { useEffect } from "react"
import { CircularProgress } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import storage from '../../lib/storage'
import * as authActions from '../../redux/modules/auth'
import * as userActions from '../../redux/modules/user'
import { useHistory } from "react-router"

const KakaoOAuthHandler = () => {
  const code = new URL(window.location.href).searchParams.get("code")
  const history = useHistory()
  const dispatch = useDispatch()
  const result = useSelector((state) => state.auth.get('result'))

  useEffect( () => {
    async function SubmitServer() {
      await dispatch(authActions.kakaoOAuthLogin(code))
      const loggedInfo = Object.assign(result)
      dispatch(userActions.setLoggedInfo(loggedInfo))
      console.log("loggedInfo", loggedInfo)
      storage.set('loggedInfo', loggedInfo);
      history.push('/');
    }
    SubmitServer()
  }, [])
    
  return (
    <CircularProgress />
  )
}

export default KakaoOAuthHandler