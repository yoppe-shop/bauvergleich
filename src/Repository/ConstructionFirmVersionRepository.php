<?php

namespace App\Repository;

use App\Entity\ConstructionFirmVersion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ConstructionFirmVersion|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConstructionFirmVersion|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConstructionFirmVersion[]    findAll()
 * @method ConstructionFirmVersion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConstructionFirmVersionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ConstructionFirmVersion::class);
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
