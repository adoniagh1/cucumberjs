Feature: Navigation entre les pages

  Scenario: Navigation depuis la page d'accueil
    Given que je suis sur la page d'accueil
    When je clique sur le bouton "connexion"
    Then je suis redirigé vers la page de connexion