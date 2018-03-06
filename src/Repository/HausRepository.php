<?php

namespace App\Repository;

use App\Entity\Haus;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Haus|null find($id, $lockMode = null, $lockVersion = null)
 * @method Haus|null findOneBy(array $criteria, array $orderBy = null)
 * @method Haus[]    findAll()
 * @method Haus[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HausRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Haus::class);
    }

    /*
    public function findBySomething($value)
    {
        return $this->createQueryBuilder('h')
            ->where('h.something = :value')->setParameter('value', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
}
