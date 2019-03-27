# Résolution de problème complexe
## Sujet du TP : système proie-prédateur 

Les systèmes multi-agents sont régulièrement utilisés dans la simulation. Cela permet d’étudier les impacts d’une modification sans avoir à la réaliser en pratique, et donc d’adapter les choix à priori. 
 
Dans le langage de votre choix, vous devrez créer un programme avec interface graphique permettant de simuler une réserve naturelle. Dans celle-ci se trouve une population de lapins, et on souhaite y introduire des renards. Cependant, on ne veut pas qu’une des espèces disparaisse. 
 
Vous devrez donc simuler la réserve, dans laquelle se trouvent deux types d’agents : 
* Les lapins : ils se multiplient 10 fois plus vite que les renards et se déplacent aléatoirement.
* Les renards : ils se déplacent aléatoirement jusqu’à voir un lapin, puis vont droit sur lui pour le manger (leur vitesse est la même que celle du lapin). Ils se reproduisent plus rarement. Si un renard ne mange pas assez, il finit par mourir. 
 
Votre programme doit permettre de modifier les paramètres suivants :
* Fréquence d’apparition d’un lapin (le renard a une fréquence d’apparition 10 fois plus faible)
* Distance de « visibilité » où un renard voit un lapin
* Durée avant la mort d’un renard par manque de nourriture
* Nombre initial de lapins et de renards. 
 
Selon les paramètres, on doit pouvoir voir quatre types de déroulement :
* Les renards sont trop nombreux, ils mangent tous les lapins puis meurent de faim (il n’y a plus personne)
* Les lapins sont plus nombreux et se multiplient plus vite qu’ils ne sont mangés, ils finissent par envahir l’espace, les renards se multiplient aussi (il y a beaucoup d’individus de chaque espèce)
* Les premiers renards ne trouvent pas de lapins et meurent de faim, les lapins sont alors seuls (il n’y a que des lapins)
* Les populations sont équilibrées, le nombre de lapins et de renards reste stable

## Barème détaillé 
 
Présence d’une interface graphique : / 4
* 1 point pour l’interface en elle-même (fenêtre)
* 2 points pour l’affichage des lapins et des renards (de manière différente)
* 1 point pour l’affichage des paramètres utilisés 
 
Présence d’une possibilité de modification des paramètres : / 5
* 2 si modification dans le code (l’indiquer dans le mail de rendu avec l’endroit précis : fichier + ligne(s))
* 4 si modification via un fichier externe (l’indiquer dans le mail de rendu avec le nom du fichier et sa syntaxe)
* 5 si modification via l’interface 
 
Chaque animal est un agent : / 9
* Déplacement aléatoire dans le cas général : /1
* Reproduction des lapins et des renards : /2
* Mort des lapins (mangés) : /2
* Mort des renards (morts de faim) : /2
* Déplacement dirigé des renards qui ont vu une proie : /2 
 
Bonus : /2 A vous de choisir ce que vous souhaiteriez rajouter, mais cela peut être :
* Ajout d’obstacles dans la réserve (arbres, rivière…)
* Comportement d’évitement des lapins (dans ce cas, prévoir une vitesse différente pour les lapins et les renards)
* Mort des animaux de vieillesse (avec un paramètre supplémentaire)
* Affichage d’informations sur un animal en cliquant dessus
* … En fonction de l’ajout, vous pourrez obtenir 0, 1 ou 2 points. 
 
Pénalité sur le nom de fichier :
* -1pt pour les noms ou le format,
* -0.5 pour la ponctuation (‘-‘ entre les noms) 
 
Pénalités de retard :
* 1 pt par jour de retard, dès la première minute 