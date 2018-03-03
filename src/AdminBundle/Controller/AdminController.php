<?php
namespace App\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class AdminController extends Controller
{
    public function testAdmin()
    {
        return $this->render('@Admin/adminStartPage.html.twig', [
        ]);
    }
}
