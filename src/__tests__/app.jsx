import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import App from '../app'

test('Premier scénario : cas passant', async () => {
  const user = userEvent
  const history = createMemoryHistory()
  const {container} = render(
    <Router history={history}>
      <App />
    </Router>,
  )

  // 1 - l'utilisateur est sur la Home / 2 - Un titre "Welcome home" est dans le document
  expect(
    screen.getByRole('heading', {name: /welcome home/i}),
  ).toBeInTheDocument()

  // 3 - Un lien "Fill out the form" est dans le document
  const link_fillForm = screen.getByRole('link', {name: /fill out the form/i})
  expect(link_fillForm).toBeInTheDocument()

  // 4 - l'utilisateur clique sur le lien
  user.click(link_fillForm)

  // 5 - l'utilisateur est redirigé sur la page 1 / 6 - Un titre "Page 1" est dans le document
  expect(screen.getByRole('heading', {name: /page 1/i})).toBeInTheDocument()

  // 7 - un lien "Go home" est dans le document
  const link_gohome = screen.getByRole('link', {name: /go home/i})
  expect(link_gohome).toBeInTheDocument()

  // 8 - Un champ avec le label "Favorite food" est dans le document
  const label_favoriteFood = screen.getByLabelText(/favorite food/i)
  expect(label_favoriteFood).toBeInTheDocument()

  // 9 - l'utilisateur rempli le champ avec "Les pâtes"
  const input_favoriteFood = screen.getByRole('textbox', {
    name: /favorite food/i,
  })
  expect(input_favoriteFood).toBeInTheDocument()
  user.type(input_favoriteFood, 'Les pâtes')
  expect(input_favoriteFood).toHaveValue('Les pâtes')

  // 10 - un lien "Next" est dans le document
  const form_page1 = input_favoriteFood.closest('form')
  expect(form_page1).toBeInTheDocument()

  // 11 - l'utilisateur clique sur le lien "Next"
  form_page1 && fireEvent.submit(form_page1)

  // 12- l'utilisateur est redirigé sur la page 2 / 13 - Un titre "Page 2" est dans le document
  expect(screen.getByRole('heading', {name: /page 2/i})).toBeInTheDocument()

  // 14 - un lien "Go back" est dans le document
  const link_goback = screen.getByRole('link', {name: /go back/i})
  expect(link_goback).toBeInTheDocument()

  // 15 - Un champ avec le label "Favorite drink" est dans le document
  const label_favoriteDrink = screen.getByLabelText(/favorite drink/i)
  expect(label_favoriteDrink).toBeInTheDocument()

  // 16 - l'utilisateur rempli le champ avec "Bière"
  const input_favoriteDrink = screen.getByRole('textbox', {
    name: /favorite drink/i,
  })
  expect(input_favoriteDrink).toBeInTheDocument()
  user.type(input_favoriteDrink, 'Bière')
  expect(input_favoriteDrink).toHaveValue('Bière')

  // 17 - un lien "Review" est dans document
  const form_page2 = input_favoriteDrink.closest('form')
  expect(form_page2).toBeInTheDocument()

  // 18 - l'utilisateur clique sur le lien "Review"
  form_page2 && fireEvent.submit(form_page2)

  // 19 - l'utilisateur est redirigé sur la page de confirmation / 20 - Un titre "Confirm" est dans le document
  expect(screen.getByRole('heading', {name: /confirm/i})).toBeInTheDocument()

  // 21 - Un texte "Please confirm your choices" est dans le document
  const text_confirm = screen.getByText(/please confirm your choices/i)
  expect(text_confirm).toBeInTheDocument()

  // 22 - Un texte label "favorite food" a pour contenu "Les pâtes"
  const label_favoriteFood_confirm = screen.getByLabelText(/favorite food/i)
  expect(label_favoriteFood_confirm).toBeInTheDocument()
  expect(label_favoriteFood_confirm).toHaveTextContent('Les pâtes')

  // 23 - Un texte label "favorite drink" a pour contenu "Bière"
  const label_favoriteDrink_confirm = screen.getByLabelText(/favorite drink/i)
  expect(label_favoriteDrink_confirm).toBeInTheDocument()
  expect(label_favoriteDrink_confirm).toHaveTextContent('Bière')

  // 24 - un lien "Go back" est dans le document
  const link_goback_confirm = screen.getByRole('link', {name: /go back/i})
  expect(link_goback_confirm).toBeInTheDocument()

  // 25 - un bouton "Confirm" est dans le document
  const button_confirm = screen.getByRole('button', {name: /confirm/i})
  expect(button_confirm).toBeInTheDocument()

  // 26 - l'utilisateur clique sur le bouton "Confirm"
  user.click(button_confirm)

  // 27 - l'utilisateur est redirigé sur la page de Félicitation / 28 - Un titre "Congrats.You did it." est dans le document
  expect(
    await screen.findByRole('heading', {name: /congrats/i}),
  ).toBeInTheDocument()

  // 29 - un lien "Go home" est dans le document
  const link_gohome_confirm = screen.getByRole('link', {name: /go home/i})
  expect(link_gohome_confirm).toBeInTheDocument()

  // 30 - l'utilisateur clique sur le lien "Go Home"
  user.click(link_gohome_confirm)

  // 31 - l'utilisateur est redirigé sur la home
  expect(
    screen.getByRole('heading', {name: /welcome home/i}),
  ).toBeInTheDocument()

  // 32 - Un titre "Welcome home" est dans le document
  expect(
    screen.getByRole('heading', {name: /welcome home/i}),
  ).toBeInTheDocument()
})

test('Second scénario : cas non passant', async () => {
  const user = userEvent
  const history = createMemoryHistory()
  const {container} = render(
    <Router history={history}>
      <App />
    </Router>,
  )

  // 1 - l'utilisateur est sur la Home / 2 - Un titre "Welcome home" est dans le document
  expect(
    screen.getByRole('heading', {name: /welcome home/i}),
  ).toBeInTheDocument()

  // 3 - Un lien "Fill out the form" est dans le document
  const link_fillForm = screen.getByRole('link', {name: /fill out the form/i})
  expect(link_fillForm).toBeInTheDocument()

  // 4 - l'utilisateur clique sur le lien
  user.click(link_fillForm)

  // 5 - l'utilisateur est redirigé sur la page 1 / 6 - Un titre "Page 1" est dans le document
  expect(screen.getByRole('heading', {name: /page 1/i})).toBeInTheDocument()

  // 7 - un lien "Go home" est dans le document
  const link_gohome = screen.getByRole('link', {name: /go home/i})
  expect(link_gohome).toBeInTheDocument()

  // 8 - Un champ avec le label "Favorite food" est dans le document
  const label_favoriteFood = screen.getByLabelText(/favorite food/i)
  expect(label_favoriteFood).toBeInTheDocument()

  // 9 - l'utilisateur rempli le champ avec ""
  const input_favoriteFood = screen.getByRole('textbox', {
    name: /favorite food/i,
  })
  expect(input_favoriteFood).toBeInTheDocument()
  user.type(input_favoriteFood, '')
  expect(input_favoriteFood).toHaveValue('')

  // 10 - un lien "Next" est dans le document
  const link_next = screen.getByRole('link', {name: /next/i})
  expect(link_next).toBeInTheDocument()

  // 11 - l'utilisateur clique sur le lien "Next"
  user.click(link_next)

  // 12- l'utilisateur est redirigé sur la page 2 / 13 - Un titre "Page 2" est dans le document
  expect(screen.getByRole('heading', {name: /page 2/i})).toBeInTheDocument()

  // 14 - un lien "Go back" est dans le document
  const link_goback = screen.getByRole('link', {name: /go back/i})
  expect(link_goback).toBeInTheDocument()

  // 15 - Un champ avec le label "Favorite drink" est dans le document
  const label_favoriteDrink = screen.getByLabelText(/favorite drink/i)
  expect(label_favoriteDrink).toBeInTheDocument()

  // 16 - l'utilisateur rempli le champ avec "Bière"
  const input_favoriteDrink = screen.getByRole('textbox', {
    name: /favorite drink/i,
  })
  expect(input_favoriteDrink).toBeInTheDocument()
  user.type(input_favoriteDrink, 'Bière')
  expect(input_favoriteDrink).toHaveValue('Bière')

  // 17 - un lien "Review" est dans document
  const link_review = screen.getByRole('link', {name: /review/i})
  expect(link_review).toBeInTheDocument()

  // 18 - l'utilisateur clique sur le lien "Review"
  user.click(link_review)

  // 19 - l'utilisateur est redirigé sur la page de confirmation / 20 - Un titre "Confirm" est dans le document
  expect(screen.getByRole('heading', {name: /confirm/i})).toBeInTheDocument()

  // 21 - Un texte "Please confirm your choices" est dans le document
  const text_confirm = screen.getByText(/please confirm your choices/i)
  expect(text_confirm).toBeInTheDocument()

  // 22 - Un texte label "favorite food" a pour contenu ""
  const label_favoriteFood_confirm = screen.getByLabelText(/favorite food/i)
  expect(label_favoriteFood_confirm).toBeInTheDocument()
  expect(label_favoriteFood_confirm).toHaveTextContent('')

  // 23 - Un texte label "favorite drink" a pour contenu "Bière"
  const label_favoriteDrink_confirm = screen.getByLabelText(/favorite drink/i)
  expect(label_favoriteDrink_confirm).toBeInTheDocument()
  expect(label_favoriteDrink_confirm).toHaveTextContent('Bière')

  // 24 - un lien "Go back" est dans le document
  const link_goback_confirm = screen.getByRole('link', {name: /go back/i})
  expect(link_goback_confirm).toBeInTheDocument()

  // 25 - un bouton "Confirm" est dans le document
  const button_confirm = screen.getByRole('button', {name: /confirm/i})
  expect(button_confirm).toBeInTheDocument()

  // 26 - l'utilisateur clique sur le bouton "Confirm"
  user.click(button_confirm)

  // 27 - l'utilisateur est redirigé sur la page d'erreur / 28 - Un texte "Oh no. There was an error." est dans le document
  expect(
    await screen.findByText(/oh no. there was an error/i),
  ).toBeInTheDocument()

  // 29 - Un texte "les champs food et drink sont obligatoires" est dans le document
  const text_error = await screen.findByText(
    /les champs food et drink sont obligatoires/i,
  )
  expect(text_error).toBeInTheDocument()

  // 30 - un lien "Go home" est dans le document
  const link_gohome_error = screen.getByRole('link', {name: /go home/i})
  expect(link_gohome_error).toBeInTheDocument()

  // 31 - un lien "Try again" est dans le document
  const link_tryAgain = screen.getByRole('link', {name: /try again/i})
  expect(link_tryAgain).toBeInTheDocument()

  // 32 - l'utilisateur clique sur le lien "Try again"
  user.click(link_tryAgain)

  // 33 - l'utilisateur est redirigé sur la page 1
  expect(screen.getByRole('heading', {name: /page 1/i})).toBeInTheDocument()

  // 34 - Un titre "Page 1" est dans le document
  expect(screen.getByRole('heading', {name: /page 1/i})).toBeInTheDocument()
})
