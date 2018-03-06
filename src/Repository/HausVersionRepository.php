<?php

namespace App\Repository;

use App\Entity\HausVersion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method HausVersion|null find($id, $lockMode = null, $lockVersion = null)
 * @method HausVersion|null findOneBy(array $criteria, array $orderBy = null)
 * @method HausVersion[]    findAll()
 * @method HausVersion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HausVersionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, HausVersion::class);
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
