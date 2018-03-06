<?php

namespace App\Repository;

use App\Entity\ConstructionFirm;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ConstructionFirm|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConstructionFirm|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConstructionFirm[]    findAll()
 * @method ConstructionFirm[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConstructionFirmRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ConstructionFirm::class);
    }

    /*
    public function findBySomething($value)
    {
        return $this->createQueryBuilder('c')
            ->where('c.something = :value')->setParameter('value', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
}
