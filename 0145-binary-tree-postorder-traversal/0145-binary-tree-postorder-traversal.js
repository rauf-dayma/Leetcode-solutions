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
var postorderTraversal = function (root) {
    let arr = []
    function postOrderTraversal(root, arr) {
        if (root === null) {
            return arr
        }
        postOrderTraversal(root.left, arr);
        postOrderTraversal(root.right, arr);
        arr.push(root.val);
    }
    postOrderTraversal(root, arr);
    return arr;
};