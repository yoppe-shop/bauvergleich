<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class LandingPageController extends Controller
{
    public function generateStartPage()
    {
        /*
        return new Response(
            '<html><body>Startseite</body></html>'
        );
        */
        return $this->render('startPage.html.twig', [
        ]);
    }

    public function testPage()
    {
        return new Response(
            '<html><body>Testseite</body></html>'
        );
    }
}
?>