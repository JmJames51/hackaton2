<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    /**
     * @Route("/sofa", name="sofa")
     */
    public function sofa(): Response
    {
        return $this->render('home/sofa.html.twig');
    }

    /**
     * @Route("/sofa", name="sofa")
     */
    public function sofa1(): Response
    {
        return $this->render('home/sofa1.html.twig');
    }

     /**
     * @Route("/sofa", name="sofa")
     */
    public function sofa2(): Response
    {
        return $this->render('home/sofa2.html.twig');
    }
}