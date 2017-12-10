/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode trimBST(TreeNode root, int L, int R) {
        if(root == null){
            return null;
        }
        //if it's less than
        if(root.val < L){
            return trimBST(root.right, L, R);
        }
        //if it's greater than
        if(root.val > R){
            return trimBST(root.left, L, R );
        }
        //update root to the current root we're looking at
        root.left = trimBST(root.left, L, R);
        root.right = trimBST(root.right, L, R);
        
        return root;
    }
}