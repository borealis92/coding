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
    public boolean findTarget(TreeNode root, int k) {
        List<Integer> sums = new ArrayList(); 
        getSums(root,sums);
        for(int i = 0; i < sums.size(); i++){
            for(int j = i + 1; j < sums.size(); j++){
                if(sums.get(i) + sums.get(j) == k){
                    return true;
                }
            }
         }
        return false;
    }
    public void getSums(TreeNode node, List<Integer> sums){
        if(node == null){
            return;
        }
        getSums(node.left,sums);
        sums.add(node.val);
        getSums(node.right,sums);        
    }
}