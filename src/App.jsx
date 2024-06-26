import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { RestrictedRoute } from "./RestrictedRoute"
import { PrivateRoute } from "./PrivateRoute"
import { useDispatch, useSelector } from "react-redux"
import { selectIsRefreshing } from "./redux/auth/selectors"
import { Suspense, lazy, useEffect } from "react"
import { refreshUser } from "./redux/auth/operations"

const Home = lazy(() => import("./pages/Home/Home"))
const Login = lazy(() => import("./pages/Login/Login"))
const Contacts = lazy(() => import("./pages/Contacts/Contacts"))
const Registration = lazy(() => import("./pages/Registration/Registration"))

function App() {
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <Layout>
      {isRefreshing ? (
        <b>Refreshing user, please wait...</b>
      ) : (
        <Suspense fallback={<>loding</>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/register'
              element={
                <RestrictedRoute
                  component={<Registration />}
                  redirectTo='/contacts'
                />
              }
            />
            <Route
              path='/login'
              element={
                <RestrictedRoute component={<Login />} redirectTo='/contacts' />
              }
            />
            <Route
              path='/contacts'
              element={
                <PrivateRoute component={<Contacts />} redirectTo='/login' />
              }
            />
          </Routes>
        </Suspense>
      )}
    </Layout>
  )
}

export default App
