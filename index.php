<!DOCTYPE html>
<!--[if lt IE 7]>      <html class=" lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>         <html class=" lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>         <html class=" lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>WPSPA</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/main.css">

  <?php wp_head(); ?>
  </head>
    <body>
      <div class="wrapper">
        <hgroup id="globalHeader" class="site_header">
          <h1 id="logo"> WPSPA <i class="fa fa-terminal"></i></h1>
          <h3 id="tagline">Angular and the WP API</h3>
        </hgroup>

        <main class="content">
          <nav class="primary">
            <ul>
              <li><a ui-sref="homeState" ng-class="{current: $state.includes('homeState')}">Home</a></li>
              <li><a ui-sref="aboutState" ng-class="{current: $state.includes('aboutState')}">About</a></li>
            </ul>
          </nav>

          <section class="content_body" ui-view>
          </section>
        </main>

        <footer id="globalFooter">
        </footer>
      </div>

      <script
        type="text/javascript"
        src="<?php echo get_template_directory_uri(); ?>/bower_components/requirejs/require.js"
        data-main="<?php echo get_template_directory_uri(); ?>/app/main.js">
      </script>

  </body>
</html>
