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
        /*
        $pdo = new \PDO('mysql:host=localhost;dbname=hausvergleich', 'hv', '4K_-fD7qPx');
        $sql = "SELECT * FROM test";
        foreach ($pdo->query($sql) as $row) {
        echo $row['name']."<br />";
        echo $row['street']."<br />";
        echo $row['zip']."<br /><br />";
        }*/
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