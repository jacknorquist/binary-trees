import { BSTNum, BNodeNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {



  if (!bst.root) {
    bst.root = (new BNodeNum(val));
    return;
  }



  function checkNode(node: BNodeNum | null, val: number) {

    //if right is null and value is bigger than the current node -> insert
    if (!node!.left && val < node!.val) {
      node!.left === new BNodeNum(val);
      return;
    }
    //if left is null and value is bigger than the current node -> insert
    if (!node!.right && val > node!.val) {
      node!.right === new BNodeNum(val);
      return;
    }

    const checkNode1 = val > node!.val ? node!.right : node!.left;
    console.log(checkNode1);

    checkNode(checkNode1, val);


  }


  checkNode(bst.root, val);



}

export { insertRecur };

