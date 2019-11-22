# IOT - Utiliser les transistors en Arduino

Les transistors sont souvent utilisés, pas que dans l'IOT, afin de fournir une plus grande puissance électrique.

On peut grossièrement les vulgariser comme des interrupteurs où la commande est électrique, et sans partie méchanique à l'intérieur. Sinon, on parlerai de relais.

## Comment ça marche ?

Un transistor possède 3 pattes :

 - *Base/Grille* : Patte permettant l'activation ou la désactivation, 
 - *Collecteur/Drain* : Là où rentre l'énergie,
 - *Émetteur/Source* : Là où sort l'énergie.

Lorsque l'on envoie un courant sur la base, le collecteur transmet l'énergie à l'émetteur. Plus d'informations sur [Wikipédia](https://fr.wikipedia.org/wiki/Transistor_bipolaire#Principe_de_fonctionnement).

Le silicium :

![Exemple de silicium](https://s.zeptobars.com/NXP-PMST3904.jpg)

*[Souce](https://zeptobars.com/en/read/NXP-PMST3904-NPN-BJT)*

Dans ce cas précis, on peut déterminer que les deux gros ronds sont le collecteur et l'émetteur. La grille est la partie orange pastel du circuit.

## Plus en détail

![Graph de fonctionement](https://upload.wikimedia.org/wikipedia/commons/b/bb/CaractTransistorBip1.png)


*[Souce](https://commons.wikimedia.org/wiki/File:CaractTransistorBip1.png)*

Lorsque le transistor est dans la zone linéaire, il ne laisse quasi pas passer le courant. La résistance est alors élevé, le courant faible, on a donc besoin de dissiper beaucoup d'énergie sous forme de chaleur.

Une fois que l'on a atteint la zone de saturation, le courant passe, la résistance est quasi nulle et le transistor ne chauffe plus.

Suivant les montages, on est soit dans l'une ou l'autre. Pour un moteur on choisiera la zone de saturation. Pour de l'audio, suivant la classe d'amplication, on sera dans un cas ou l'autre.

Ce qui explique pourquoi certains amplificateurs chauffent énormément. Leur 0v étant sur la motié du courant max. Ainsi, on cable un condensateur entre le transistor et le haut parleur. On évite alors le creux audio (présent en classe B) de la zone linéaire mais en contre partie, il faut dissiper ce courant (c'est la Classe A).

L'amplification que sur la partie supérieur du courant, donc très mauvais en audio, est la classe C. Si l'on gère la partie négative et positive de l'onde, on est en classe B.

Plus de détails sur [Wikipédia](https://fr.wikipedia.org/wiki/Classes_de_fonctionnement_d%27un_amplificateur_%C3%A9lectronique).


