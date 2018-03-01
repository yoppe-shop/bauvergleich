<?php
namespace App\Controller\LandingPage;

use Symfony\Component\HttpFoundation\Response;

class LandingPageController
{
    public function generateStartPage()
    {
        return new Response(
            '<html><body>Startseite</body></html>'
        );
    }
}
?>