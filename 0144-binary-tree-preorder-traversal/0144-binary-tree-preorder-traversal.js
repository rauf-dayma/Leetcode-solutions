/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {

      let arr = []
    function preOrderTraversal(root, arr) {
        if (root === null) {
            return arr
        }
         arr.push(root.val);
        preOrderTraversal(root.left, arr);
        preOrderTraversal(root.right, arr);
       
    }
    preOrderTraversal(root, arr);
    return arr;
    
};