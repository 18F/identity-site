---
title: Créer un compte
description: Rejoignez les millions de personnes qui font confiance à Login.gov
  pour un accès sûr et sécurisé aux agences gouvernementales.
one_account_banner: true
permalink: /fr/create-an-account/
twitter_card: large
image: /assets/img/login-gov-600x314.png
---

<div class="create-an-account">
  <div class="container">
    <div class="grid-row">
      <article class="desktop:grid-col-7">
        <header class="intro">
          {{ site.data[page.lang].settings["create-an-account"]["intro"] | replace_locale_base_url | markdownify }}
        </header>
        <div class="step-1 step list">
          {{ site.data[page.lang].settings["create-an-account"]["step_1"] | replace_locale_base_url | markdownify }}
          <div class="mobile step-1-img"></div>
        </div>
        <div class="step-2 step list">
          {{ site.data[page.lang].settings["create-an-account"]["step_2"] | replace_locale_base_url | markdownify }}
          <div class="mobile step-2-img"></div>
        </div>
        <div class="step-3 step list">
          {{ site.data[page.lang].settings["create-an-account"]["step_3"] | replace_locale_base_url | markdownify }}
          <div class="mobile step-3-img"></div>
        </div>
      </article>
      <div class="sidebar desktop:grid-col-4 desktop:grid-offset-1 desktop-lg:grid-col-3 desktop-lg:grid-offset-2">
        <div class="box">
          {{ site.data[page.lang].settings["create-an-account"]["info"] | replace_locale_base_url | markdownify }}
        </div>
      </div>
    </div>
  </div>
</div>
