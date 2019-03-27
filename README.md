# Résolution de problème complexe
## Sujet du TP : système proie-prédateur 

Les systèmes multi-agents sont régulièrement utilisés dans la simulation. Cela permet d’étudier les impacts d’une modification sans avoir à la réaliser en pratique, et donc d’adapter les choix a priori. 
 
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