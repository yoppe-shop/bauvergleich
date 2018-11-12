<?php

namespace App\Controller;

use App\Form\Task;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

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
            '<html><body>Testseite</body></html>',
            200
        );
    }

    public function new(Request $request)
    {
        $task = new Task();

        $form = $this->createFormBuilder($task)
            ->add('task', TextType::class)
            ->add('dueDate', TextType::class)
            ->add('save', SubmitType::class, array('label' => 'Create Task'))
            ->getForm();

        $form->handleRequest($request);
        // var_dump($result); echo "<br><br>";

        if($form->isSubmitted()) {
            $task = $form->getData();
            if ($task->isValid()) {
                var_dump($task);
            }
        }
        return $this->render('new.html.twig', [
           'form' => $form->createView(),
        ]);
    }
}
?>